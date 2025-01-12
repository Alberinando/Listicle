export interface HeaderProps {
    title?: string;
    onBackPress?: () => void;
    onLogout?: () => void;
    showLogout?: boolean;
    showSearch?: boolean;
    onSearch?: () => void;
    keyword?: string;
    showBack?: boolean;
}
