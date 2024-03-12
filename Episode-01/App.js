const heading = React.createElement(
                                    "div"
                                    ,{id: "parent"}
                                    ,[React.createElement(
                                                        "div"
                                                        ,{id:"child"},
                                                        [React.createElement(
                                                            "h1"
                                                            ,{className:"heading"}
                                                            ,"My self Heading"
                                                        ),React.createElement("h1"
                                                                            ,{className:"heading"}
                                                                            ,"I'm h1 Sibling")]),
                                                                        React.createElement(
                                                                            "div"
                                                                            ,{id:"child"},
                                                                            [React.createElement(
                                                                                "h1"
                                                                                ,{className:"heading"}
                                                                                ,"My self Heading"
                                                                            ),React.createElement("h1"
                                                                                                ,{className:"heading"}
                                                                                                ,"I'm h1 Sibling")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
