import { LoginFormSchema, LoginFormState } from "@/lib/definitions";
import { createSession } from "@/lib/sessions";
import { BASE_API } from "@/lib/utils";
import { redirect } from "next/navigation";

export async function singin(state: LoginFormState, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const validateFileds = LoginFormSchema.safeParse({
    email,
    password,
  });
  
  console.error(validateFileds)

  if (!validateFileds.success) {
    return {
      errors: validateFileds.error.flatten().fieldErrors,
    };
  }

  const URL = BASE_API + "/auth/signin";
  const apiRes = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const resData = await apiRes.json();
  if (!apiRes.ok) {
    return {
      errors: resData,
    };
  }

  await createSession("session", resData.data.token);
  // redirect('/')
}
