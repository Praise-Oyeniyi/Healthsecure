
export default function SubdomainPage({ params }) {
    const { domain } = params;
  
    return (
      <div>
        <h1>Welcome to {domain}!</h1>
        <p>This page is dynamically generated for subdomain: {domain}</p>
      </div>
    );
  }
  