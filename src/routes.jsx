import Root from "./root/Root.jsx";
import BrowseChats from "./pages/browse-chats/BrowseChats.jsx";
import MyChats from "./pages/my-chats/MyChats.jsx";
import NewChat from "./pages/new-chat/NewChat.jsx";
import Search from "./pages/search/Search.jsx";
import MyConnections from "./pages/my-connections/MyConnections.jsx";
import NewConnections from "./pages/new-connections/NewConnections.jsx";
import Chat from "./pages/chat/Chat.jsx";

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <BrowseChats />,
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
            }, {
                path: '/chat',
                element: <Chat />
            }
        ]
    }
]

export default routes;