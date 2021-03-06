Rails.application.routes.draw do

  get 'uploads/new'

  get 'uploads/create'

  get 'uploads/index'

  root 'welcome#show'
  get '/' => 'users#show'
  get '/welcome' => 'welcome#show'
  get '/index' => 'welcome#index'
  get '/selection' => 'welcome#selection'
  get '/uploads/directupload' => 'uploads#directupload'

  resources :users
  resources :uploads


  get '/users/:id/matches' => 'matchs#index'

  get '/users/:id/test' => 'users#test'
  get '/users/:id/graphs' => 'users#graphs'

  get '/test' => 'test#test'

  get '/twitch' => 'twitch#index'
  get '/twitch/logged' => 'twitch#logged'
  get '/twitch/edit' => 'twitch#editor'
  get '/twitch/notes' => 'twitch#notes'
  get '/twitch/video' => 'twitch#video'
  get '/twitch/playlist/:id' => 'twitch#playlist'

  get '/chin/:swap' => 'test#chin'
  get '/chin2/:id' => 'test#chin2'
  get '/chin3/:id' => 'test#chin3'

  get '/cannon' => 'test#cannon'
  get '/carousel' => 'test#carousel'
  get '/background/:id' => 'test#background'

  get '/twitch_test' => 'test#flash'
  post '/twitch/editform' => 'twitch#editform'


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
 

  get '/sessions/new' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  delete '/sessions' => 'sessions#destroy'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
