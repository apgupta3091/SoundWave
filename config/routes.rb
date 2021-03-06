Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create, :update] do 
      resources :songs, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :destroy]
  end
end
