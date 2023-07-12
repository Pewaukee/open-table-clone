import { Alert } from '@mui/material';

export default function ErrorPage() {
  return (
    <>
      <Alert severity="error">
        <p>
          There was an error booking your reservation. Please try again.
        </p>
      </Alert>
    </>
  );
}
