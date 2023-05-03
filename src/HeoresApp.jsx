import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeoresApp = () => {
  return (
    <AuthProvider>
      
      <AppRouter/>

    </AuthProvider>
  )
}


