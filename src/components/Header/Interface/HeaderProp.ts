export interface HeaderProps {
    title?: string;
    onBackPress?: () => void;
    onLogout?: () => void;
    showLogout?: boolean;
    showSearch?: boolean;
    onSearch: (text: string) => void;
    keyword?: string;
    showBack?: boolean;
}
