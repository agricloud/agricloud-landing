guard :coffeescript, output: 'public/js/gen' do
  watch(%r{^src/coffeescripts/(.*)\.coffee})
end

guard 'livereload' do
  watch(%r{views/.+\.(jade)$})
  watch(%r{routes/.+\.(js)$})
  watch(%r{public/.+\.(css|js|html)})
  # Rails Assets Pipeline
end
