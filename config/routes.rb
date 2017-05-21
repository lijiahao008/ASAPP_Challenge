Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:"chat#index"
  namespace :api, defaults: {format: :json} do
    resources :conversations, only: [:index, :show, :destroy] do
      member do
        post :reply
        post :mark_as_read
      end
    end
  end
end
