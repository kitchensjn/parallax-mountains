# Parallax-Mountains

*Parallax-Mountains is a mobile friendly theme designed for static personal porfolio websites and blogs, created with Jekyll and hosted through GitHub Pages.*

Parallax-Mountains was first built as the template for my personal website (www.james-kitchens.com). By default, this theme includes a unique homepage with links to user's social media sites, a short biography, a section for recent research projects, and the ability to categorize blog posts.

I am always open to feedback or ways to improve this theme. Submit an [Issue](https://github.com/kitchensjn/parallax-mountains/issues/new/choose) or Pull Request with any of your ideas!

## Installation

The easiest method for installing Parallax-Mountains is to access it through the GitHub. This requires you to have an account before you can proceed; if you don't yet have one, create it [HERE](https://github.com/join). Next, follow the steps below to get you started:

### Fork This Repo

In the top right corner of this repository, click the Fork button. This will copy the repository into your account, so that you can customize it to your needs.

### Rename The Repo (Optional)

Within Settings, you can rename the repository to whatever you would like. By default, the repository name will appear within your URL (ex. https://kitchensjn.github.io/parallax-mountains). If you name the repository [username].github.io, you will be able to access it without the additional repository name.

### Set Up GitHub Pages

While you are in Settings, scroll down to nearly the bottom of the page and locate the GitHub Pages section. Set the Source to the 'master' branch and click Save. After a minute, refresh the page, scroll back to the GitHub Pages section, and your website's URL will be clickable.


**I am in the process of making this theme accessible through rubygems and GitHub remote_themes.**


## Usage

I've provided some default information and files from my website to fill out the theme, but you will want to make the site your own!

First, open up the _config.yml file. This contains information about you and your site. As you look into customization, information in the _config.yml will be able to be accessed throughout the various pages of your site. Information is written using YAML syntax and the formatting must be preserved. *Warning*: I highly recommend using quotes around your information as it will fail if you use special characters outside of quotes.

Next, the index.md file contains the information specifically for the homepage. "---" denotes Jekyll Front Matter, or information that can be called by name from the page.







Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "parallax-mountains"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: parallax-mountains
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install parallax-mountains

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `parallax-mountains.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

