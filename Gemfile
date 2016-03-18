source 'https://rubygems.org'
ruby '2.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.3'
gem 'rake','10.5.0'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
#### jquery turbolinks to enable $(document).ready
# gem 'jquery-turbolinks'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'httparty'

gem 'pry-rails'

gem "rails-erd"

gem 'mime-types'

gem 'netrc'

gem 'http-cookie'

gem 'rest-client'



gem 'aws-sdk', '< 2.0'

gem 'm3u8'

gem 'redis'

gem 'ejs'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  #testing media conversion
  gem 'streamio-ffmpeg'

  #testing with Rspec
  gem 'rspec-rails' , '~> 3.1.0'
  gem 'factory_girl_rails' , '~> 4.4.1'

  #profiling
  gem 'rack-mini-profiler'
  gem 'flamegraph'
  gem 'stackprof' # ruby 2.1+ only
  gem 'memory_profiler', '>=0.9.6'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do 
  gem 'faker' , '~> 1.4.3'
  gem 'capybara', '~> 2.4.3' 
  gem 'database_cleaner', '~> 1.3.0'
  gem 'launchy', '~> 2.4.2'
  gem 'selenium-webdriver', '~> 2.43.0'
end
