export default function MenuItem({ title, subLinks }) {
    return (
        <li className="trigger">
            <a href="/#">{title}</a>
            {subLinks && (
                <ul className="submenu">
                    {subLinks.map((link, index) => (
                        <li key={index}>
                            <a href="/#">{link}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}