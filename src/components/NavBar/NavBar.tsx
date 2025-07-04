// src/components/LeftNavBar.tsx

import {
    AppstoreOutlined,
    BorderOuterOutlined,
    CreditCardOutlined,
    CustomerServiceOutlined,
    HomeOutlined,
    SafetyOutlined,
    StrikethroughOutlined,
    WarningOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const adminItems: MenuItem[] = [
    getItem('Home', '/', <HomeOutlined />),
    getItem('About', '/about', <AppstoreOutlined />),
    // 去掉 NotFound 菜单项
    getItem('Compliance', '/compliance', <SafetyOutlined />),
    getItem('Alarms', '/alarm', <WarningOutlined />),
    getItem('Competence', '/competence', <BorderOuterOutlined />),
    getItem('Finance', '/finance', <StrikethroughOutlined />, [
        getItem('Invoices', '/finance/invoices', <CreditCardOutlined />),
    ]),
    getItem(
        <a href="https://tech-away.com.au/contact/" target="_blank" rel="noopener noreferrer">
            Support
        </a>,
        'support',
        <CustomerServiceOutlined />
    ),
];

export interface LeftNavBarProps {

    selectedKey: string;
    setSelectedKey: (key: string) => void;
}

export const NavBar: React.FC<LeftNavBarProps> = ({

    selectedKey,
    setSelectedKey,
}) => {
    const navigate = useNavigate();

    const handleClick: MenuProps['onClick'] = (e) => {
        const key = e.key;

        // 若 key 是外链，直接跳过
        if (typeof key === 'string') {
            if (key.startsWith('http')) {
                window.open(key, '_blank');
            } else {
                setSelectedKey(key);
                navigate(key); // key 是完整路径，比如 '/about'
            }
        }
    };


    return (
        <div>
            <div className="ProviderTitle h-16 bg-slate-950 border-b shadow-sm flex items-center px-4">
                {/* <img
                    className="h-8 w-8 rounded-full"
                    src="/logo192.png"
                    alt="logo"
                /> */}
                <span className="ml-2 font-semibold text-lg text-slate-50">ProviderPulse</span>
            </div>
            <div className="h-screen leftNav">
                <Menu
                    style={{ width: 220, height: '100vh', textAlign: 'left' }}
                    onClick={handleClick}
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                    theme="light"
                    items={adminItems}
                />
            </div>
        </div>
    );
};
