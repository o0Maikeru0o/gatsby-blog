/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

export default props => (
    <Link
        sx={{
            color: "secondary",
            fontSize: "2",
            fontWeight: `${props => props.fontWeight || 'normal'}`,
            lineHeight: 1,
            margin: "0 0.5rem 0 0",
            padding: "0.25rem",
            textDecoration: none,

            "&.current - page": {
                borderBottom: `2px solid secondary`,
            },

            "&:last-of-type": {
                marginRight: 0,
            }
        }}
    >
        {props.children}
    </Link >
)
