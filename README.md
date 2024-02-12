Integrating dashboard into your app is a straightforward three-step process.

#### **1) Install Semaphor Package**

Open your terminal in your project directory and run the following command. This command installs the `react-semaphor` package and adds it to your project dependencies.

```markdown
npm i react-semaphor
```

#### **2) Get Auth Token**

Before rendering the `Dashboard`, first acquire the `AuthToken`. This token enhances the security of your dashboard by restricting access to only users with the token. Make a simple fetch call as shown below.

```jsx {1-3} copy
const DASHBOARD_ID = 'd_cf007a8b-19bc-46ad-8787-2915445b7b86'; // Replace with your actual dashboard ID
const DASHBOARD_SECRET = 'ds_f32f0b30-b7e1-40f9-ba6a-9804a5b9d635'; // Replace with your actual dashboard secret
const TOKEN_URL = 'https://semaphor.cloud/api/v1/token';

async function getToken() {
  const url = new URL(TOKEN_URL);
  url.searchParams.append('dashboardId', DASHBOARD_ID);
  url.searchParams.append('dashboardSecret', DASHBOARD_SECRET);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const token = await response.json();
    if (token?.accessToken) {
      setAuthToken(token);
    }
  } catch (error) {
    console.error('There was an error!', error);
  }
}
```

#### **3) Initialize Dashboard**

Below is a simple example of a React component that demonstrates how to use the `Dashboard` component from the `react-semaphor` package.

```tsx {2-3} copy
import { useEffect, useState } from 'react';
import { AuthToken, Dashboard } from 'react-semaphor';
import '../node_modules/react-semaphor/dist/style.css'; // IMPORTANT! Include the CSS file. This is the default style, you can customize it.

function App() {
  const [authToken, setAuthToken] = useState<AuthToken>();

  return (
    <div>
      <h2>My cool dashboard</h2>
      <Dashboard authToken={authToken} id={DASHBOARD_ID} />
    </div>
  );
}
```

### **Full Code**

Here is the complete React code that uses the above steps. You can copy and paste this example into your own application.

```tsx copy
import { useEffect, useState } from 'react';
import { AuthToken, Dashboard } from 'react-semaphor';
import '../node_modules/react-semaphor/dist/style.css'; // IMPORTANT! Include the CSS file.

const DASHBOARD_ID = 'd_cf007a8b-19bc-46ad-8787-2915445b7b86'; // Replace with your actual dashboard ID
const DASHBOARD_SECRET = 'ds_f32f0b30-b7e1-40f9-ba6a-9804a5b9d635'; // Replace with your actual dashboard secret
const TOKEN_URL = 'https://semaphor.cloud/api/v1/token';

function App() {
  const [authToken, setAuthToken] = useState<AuthToken>();

  useEffect(() => {
    async function getToken() {
      const url = new URL(TOKEN_URL);
      url.searchParams.append('dashboardId', DASHBOARD_ID);
      url.searchParams.append('dashboardSecret', DASHBOARD_SECRET);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const token = await response.json();
        if (token?.accessToken) {
          setAuthToken(token);
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
    getToken();
  }, []);

  return (
    <div>
      <h2>My cool dashboard</h2>
      <Dashboard authToken={authToken} id={DASHBOARD_ID} />
    </div>
  );
}

export default App;
```

### **Key Considerations**

- **Security Note:** Keep the `DASHBOARD_SECRET` secure and do not expose it in client-side code in production. This example is for demonstration purposes only. When deploying in production, obtain the authentication token from a secure, server-side environment.
- **Fetching the AuthToken:** Before the dashboard can be displayed, an authentication token must be fetched. The `useEffect` hook is used to perform this action when the component mounts.
