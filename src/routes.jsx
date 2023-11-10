import Root from "./root/Root.jsx";
import Chats from "./pages/chats/Chats.jsx";
import MyChats from "./pages/my-chats/MyChats.jsx";
import NewChat from "./pages/new-chat/NewChat.jsx";
import Search from "./pages/search/Search.jsx";
import MyConnections from "./pages/my-connections/MyConnections.jsx";
import NewConnections from "./pages/new-connections/NewConnections.jsx";

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Chats />,
                children: [
                    {
                        path: '/',
                        element: <MyChats />
                    },
                    {
                        path: '/new-chat',
                        element: <NewChat />
                    } 
                ]
            },
            {
                path: '/search',
                element: <Search />,
                children: [
                  {
                    path: "/search",
                    element: <NewConnections />
                  },
                  {
                    path: "/search/my-connections",
                    element: <MyConnections />
                  }
                ]
            }
        ]
    }
]

export default routes;