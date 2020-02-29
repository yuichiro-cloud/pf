Rails.application.routes.draw do
  root "pfs#top"
  resources :pfs, only: [:new,:index, :show, :create] do
    collection do
      get :top
    end
  end
end
