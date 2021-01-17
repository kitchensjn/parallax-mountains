---
layout: post
link: /blog/updating-website-to-jekyll
title: Updating Website to Jekyll
github-link: https://github.com/kitchensjn/streamflow-and-precipitation
date: January 6, 2021
skills: [Jekyll, HTML, CSS, JavaScript]
desc: With all of the rain coming to the southeastern United States, I started to think about how it is affecting the river levels.
thumbnail: /assets/blog/updating-website-to-jekyll/thumbnail.png
---

{:.images}
![Pyinstaller](/assets/blog/updating-website-to-jekyll/thumbnail.png)

At the start of quarantine in early 2020, I decided to develop a personal website where I could highlight my ongoing and past research projects and write short blog posts on various topics that I find interesting. This website was built with custom HTML, CSS, and JavaScript. As it has grown, I've run into numerous scenarios where I've had to repeat code and hardcode sections. Creating new blog posts was tedious, as it required specific and longwinded formatting of paragraph elements. I was happy with the design of my website, but wanted to streamline the file structure. Jekyll, originially developed by Shopify, is a static site generator that solves many of these issues by allowing users to create templates that are filled by inputs from Markdown files. In addition to this, Jekyll is supported by GitHub Pages, which allows for free hosting of these sites. There is a plethora of Jekyll templates, known as themes, found online. The first version of my website was actually built using the modern-resume-theme theme developed by James Grant, which served as my introduction to the generator; I ultimately switched to a custom site for the second version to better match my interest in blogging as well as build my skills in front end web development.

So how do I go about converting my static website into Jekyll site? This walkthrough will describe Jekyll installation, the beginnings of theme creation, the pros and cons of how I organized my files and templates, and how I have used Jekyll for my personal website to decrease development hassle as a whole. I am still in the process of learning all of the ins and outs of the new generator, so some of the opinions and discussion points may be updated in the future. Because of this, the GitHub repository and codes linked might not match directly with what is found within this blog post, though it will hopefully remain similar.

As a first time user of Jekyll, I would recommend that you start with a predeveloped theme. There's thousands of them on GitHub and other sites, like [jekyllthemes.org](http://jekyllthemes.org). Many of these can be hosted directly through GitHub without having to install anything onto your own computer. Jekyll themes are designed to have their users manipulate information in Markdown and YML files that then are passed through an HTML template and visualized on your website. All sites start with the same structure:

- _config.yml: the configuration settings of your site. Contains elements like your website title and which directories to include in your build
- _layouts: overarching HTML templates, such as for a homepage or blog post
- _includes: smaller HTML templates. These alter sections of the page, such as the navigation bar, call to action, etc...
- _sass: the stylesheets for your site
- assets: additional static files, such as images, scripts, and more

### Installing Jekyll

Because I wanted to develop my own theme, I needed to install Jekyll on my computer. I use a Mac, which actually comes with Ruby preinstalled (Jekyll is built off of Ruby). Unfortunately, this almost leads to more difficulty as the computer fights to avoid changing any of these preinstalled files. I tried to follow the official documentation ([HERE](https://jekyllrb.com/docs/installation/macos/)), but ran into a number of issues that prevented install. I ultimately was successfuly by using [RVM](https://rvm.io) rather than Homebrew to install the latest version of Ruby, and then returning to the official instructions for installing Jekyll on top of that.

### Creating A New Theme

{:.codeheader}
console
```
jekyll new-theme parallax-mountains
```

This command creates a new Jekyll theme called "parallax-mountains", including all of the scaffolding needed to get you started. I started with the homepage by creating a home.html file to the _layouts.

{:.codeheader}
home.html
{% raw %}
```html
<!DOCTYPE html>
<html lang="en">
    
    {%- include head.html -%}

    <body>
        
        {%- include navbar.html -%}

        {%- include home.html -%}

        {%- include bio.html -%}

        {%- include categories.html -%}
        
        {%- include contactbar.html -%}
        
    </body>

</html>
```
{% endraw %}

On the surface, this file resembles a standard HTML file, with an html tag and a body tag. Each include statement is Liquid syntax which calls an HTML file from the _includes directory corresponding to a different section of the webpage. When the site is built, these includes are then compiled into a single large HTML file that displays all of the sections. Let's step through each include starting with head.html.

{:.codeheader}
head.html
{% raw %}
```html
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>James Kitchens</title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ '/assets/logo/JK.ico' | relative_url }}">
    <script src="https://kit.fontawesome.com/b53b88607b.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="{{ '/assets/scripts/navbar.js' | relative_url }}"></script>
    <link rel="stylesheet" href="{{ '/assets/styles/main.css' | relative_url }}">
    
    {% if page.layout == 'home' %}
        <script language="javascript" type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js"></script>
        <script src="{{ '/assets/scripts/home.js' | relative_url}}"></script>
        <script src="{{ '/assets/scripts/parallax-mountains.js' | relative_url}}"></script>
    {% endif %}

</head>
```
{% endraw %}

This file holds all of the data loaded within the head section of the HTML code, including metadata, general scripts, and styles. As I wanted the styles to be consistent across different pages of the website, the majority of the data is loaded into all pages. The exceptions to this are scripts associated with sections specifically on the homepage and the mountain animation.

{:.codeheader}
navbar.html
{% raw %}
```html
<div class="topnav" id="myTopnav">
    
    <a class="menuPage" id="Logo" href="{{ '/#home' | relative_url }}" style="padding:12px 16px 8px 16px;">
        <img class="logo" src="{{ '/assets/logo/JK.png' | relative_url }}" alt="JK_logo">
    </a>
    
    {% if page.layout == 'home' %}
        <a class="menuPage activePage" id="Home" href="{{ '/#home' | relative_url }}">Home</a>
    {% else %}
        <a class="menuPage" id="Home" href="{{ '/#home' | relative_url }}">Home</a>
    {% endif %}

    <a class="menuPage" id="Bio" href="{{ '/#bio' | relative_url }}">Bio</a>
    
    {% for category in site.categories %}
        <a class="menuPage" id="{{ category[0] | capitalize }}" href="{{ '/#' | append: category[0] | relative_url }}">{{ category[0] | capitalize }}</a>
    {% endfor %}
    
    {% if site.social_links.CV.link %}
        <a class="menuPage" id="CV" href="{{ site.social_links.CV.link | relative_url }}" target="_blank">CV</a>
    {% endif %}
    
    <a href="javascript:void(0);" class="menuBurger icon" onclick="hamburger()">
        <i class="fa fa-bars"></i>
    </a>
    
</div>
```
{% endraw %}