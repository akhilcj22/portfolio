const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">© {new Date().getFullYear()} Akhil C J. All rights reserved.</p>
          <p className="text-sm">Built with passion and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
