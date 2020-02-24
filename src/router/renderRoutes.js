import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import store from '../store/store';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    document.title = route.title || '考证系统';
                    //store.getState().isLogin 登录状态控制
                    let permission = true;
                    let {userInfo} = store.getState();
                    let authPath = 'login'
                    if(route.path.includes('/admin')){
                        authPath = 'login_a'
                        if(userInfo.roleType === 0 && userInfo.id !== null || userInfo.roleType === 99){
                            permission = true;
                        }
                    }
                    if(route.path.includes('/student')){
                        if(userInfo.roleType === 2 && userInfo.id !== null){
                            permission = true
                        }
                    }
                    if(route.path.includes('/teacher')){
                        if(userInfo.roleType === 1 && userInfo.id !== null){
                            permission = true
                        }
                    }
                    if(!route.requiresAuth || permission || route.path === authPath){
                        return <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
            />
        ))}
    </Switch>
) : null;

export default renderRoutes

