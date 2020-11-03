if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_auth_backend_session", domain: "http://localhost:3001"
else
    Rails.application.config.session_store :cookie_store, key: "_auth_backend_session"
end 

# This file is used to allow communication no matter what front-end tool is being used (React, Angular, etc.)