import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

export function EnvWarning() {
  return (
    <div className="w-full max-w-4xl mx-auto my-4">
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>
          Action Required: Configure Your Supabase Credentials
        </AlertTitle>
        <AlertDescription>
          <p>
            Your Supabase environment variables are not configured. Please create
            a <code>.env</code> file by copying <code>.env.example</code> and
            follow the steps below. Restart the development server once you're
            done.
          </p>

          <div className="mt-4 text-left space-y-6 max-h-96 overflow-y-auto p-2">
            <div>
              <h3 className="font-bold text-lg">
                Get your Supabase API Keys
              </h3>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-sm">
                <li>
                  Go to the{' '}
                  <a
                    href="https://supabase.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Supabase Dashboard
                  </a>
                  .
                </li>
                <li>
                  Go to the Settings page in the Dashboard.
                </li>
                <li>
                  Click API in the sidebar.
                </li>
                <li>
                  Find your API URL, anon, and service_role keys on this page.
                </li>
                <li>
                  Copy the API URL to `VITE_SUPABASE_URL` and the anon key to `VITE_SUPABASE_ANON_KEY` in your `.env` file.
                </li>
              </ol>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}
