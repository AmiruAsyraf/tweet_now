get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet' do
  $client.update(params[:tweet]) ? @respond = "Success" : @respond = "Failed"
  erb :result
end