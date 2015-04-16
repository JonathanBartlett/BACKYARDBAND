Rails.application.routes.draw do
	root to: 'welcome#index'
	devise_scope :artist do
		devise_for :artists
			get '/artists/sign_out' => 'devise/sessions#destroy'
	end
	devise_scope :user do
		devise_for :users
			get '/users/sign_out' => 'devise/sessions#destroy'
	end
end
