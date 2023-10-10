import TextInput from "../TextInput";
import { useState } from "react";
import { ShowErrorObject } from "@/app/types";
import { useUser } from "@/app/context/user";
import { useGeneralStore } from "@/app/stores/general";
import { BiLoaderCircle } from "react-icons/bi";
import { validateLogin } from "../../validations/validations";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  let { setIsLoginOpen } = useGeneralStore();
  const contextUser = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = { email: "", password: "" };
  const [error, setError] = useState<ShowErrorObject | null>(null);
  const { formState, updateField } = useForm(initialState);

  const showError = (type: string) => {
    if (error && Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return "";
  };

  const login = async () => {
    setError(null);
    const validationError = validateLogin(formState);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (!contextUser) return;

    try {
      setLoading(true);
      await contextUser.login(formState.email, formState.password);
      setLoading(false);
      setIsLoginOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-[28px] mb-4 font-bold">Log in</h1>

        <div className="px-6 pb-2">
          <TextInput
            string={formState.email}
            placeholder="Email address"
            onUpdate={(value) => updateField("email", value)}
            inputType="email"
            error={showError("email")}
          />
        </div>

        <div className="px-6 pb-2">
          <TextInput
            string={formState.password}
            placeholder="Password"
            onUpdate={(value) => updateField("password", value)}
            inputType="password"
            error={showError("password")}
          />
        </div>

        <div className="px-6 pb-2 mt-6">
          <button
            disabled={loading}
            onClick={() => login()}
            className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${
                              !formState.email || !formState.password
                                ? "bg-gray-200"
                                : "bg-[#F02C56]"
                            }
                        `}
          >
            {loading ? (
              <BiLoaderCircle
                className="animate-spin"
                color="#ffffff"
                size={25}
              />
            ) : (
              "Log in"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
