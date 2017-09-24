Rails.application.routes.draw do
  root to: "punchlines#index"

  namespace :api, defaults: { format: :json } do
    resources :punchlines, only: [ :show ]
  end

end
