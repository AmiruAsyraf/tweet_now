get '/' do
  # Look in app/views/index.erb
  erb :index
end

# get '/tweet/:result' do
# @respond = params[:result]

#  erb :result
# end

post '/tweet' do
  result = $client.update(params[:tweet])

  if result
    @respond = "You have successfully tweeted"
  else
    @respond = "Empty tweet or more than 140 char"
  end


  erb :result
end