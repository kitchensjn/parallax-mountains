# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "parallax-mountains"
  spec.version       = "0.1.7"
  spec.authors       = ["James Kitchens"]
  spec.email         = ["kitchensjn@gmail.com"]

  spec.summary       = "This is a personal portfolio website theme."
  spec.homepage      = "https://www.github.com/kitchensjn/parallax-mountains"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets/CV|assets/logo|assets/scripts|assets/styles|_layouts|_includes|_sass|_blog|_projects|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
