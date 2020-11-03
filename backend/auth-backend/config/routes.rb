Rails.application.routes.draw do
  root to: "static#home"
  resources :sessions
  resources :registrations, only: [:create]

  get '/logged_in' => "sessions#logged_in"
  post '/logout' => "sessions#logout"
  post '/registrations' => "registrations#create"
  post '/sessions' => "sessions#create"
end
