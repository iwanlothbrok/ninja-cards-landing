import type { NextPageContext } from 'next';

type ErrorPageProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#050505',
        color: '#f5f5f5',
        fontFamily: 'system-ui, sans-serif',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
          {statusCode ? `Error ${statusCode}` : 'Unexpected error'}
        </h1>
        <p style={{ color: '#cfcfcf', maxWidth: '520px', lineHeight: 1.6 }}>
          Something went wrong while loading this page.
        </p>
      </div>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
