function Footer()
{
    const year =new Date().getFullYear();
    return (
<footer>
    <p>&copy; {year} Movie Explorer. All rights reserved.</p>
</footer>
    );
}
export default Footer;