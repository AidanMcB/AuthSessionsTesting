class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params["user"]["email"])
        
        if user && user.authenticate(params["user"]["password"])
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else
            render json: { status: 401 }
        end 
    end 

    def logged_in
        if(session[:user_id])
            user = User.find(session[:user_id])

            render json: {
                logged_in: true,
                user: user,
                session: session
            }
        else
            render json: {
                logged_in: false,
                session: session
            }
        end
    end

    def logout
        session.clear
        render json: { status: 200, logged_out: true, session: session }
    end
end 