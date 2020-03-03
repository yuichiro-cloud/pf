Rails.application.routes.draw do
  root "pfs#top"
  resources :pfs, only: [:index] do
    collection do
      get :top
      get :about
      get :roadbiker
    end
  end
end
