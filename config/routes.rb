Rails.application.routes.draw do	
  devise_for :artists
  devise_for :users
	root to: 'welcome#index'
	get '/users/sign_out' => 'devise/sessions#destroy'
end
