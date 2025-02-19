Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :show, :update]
    end
  end

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
end
