

export const signIn = (email: string, password: string) => {
  return async () => {

    // Validation
    if (email === "" || password === "") {
      alert("必須項目が未入力です")
      return false
    }


  }
 }