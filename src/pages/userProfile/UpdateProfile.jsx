import * as React from 'react';
import Header from "../../components/header/header";
import Content from "../../components/userProfile/content/Content";
import {useSelector} from "react-redux";
import Loading from "../../components/Notification/loading";

export default function UpdateProfile() {
    return (
        <div>
                <div>
                    <Header/>
                    <Content/>
                </div>
        </div>

    );
}
