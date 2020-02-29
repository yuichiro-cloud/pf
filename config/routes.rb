Rails.application.routes.draw do
  root "pfs#top"
  resources :pfs, only: [:new,:index, :show] do
    collection do
      get :top
      get :about
    end
  end
end
