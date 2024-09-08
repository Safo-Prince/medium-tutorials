import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({ full_name: z.string().min(3) });

type FormData = z.infer<typeof schema>;

const ModernForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const Onsubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(Onsubmit)}
      className="w-full flex flex-col space-y-2"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="full_name"
            className="block text-left  text-sm font-medium leading-6 text-gray-900"
          >
            Full Name
          </label>
          <div className="mt-2">
            <input {...register("full_name")} type="text" id="full_name" />
          </div>
          {errors.full_name && <p>{errors.full_name.message} </p>}
        </div>
      </div>
      <button type="submit">Click Me</button>
    </form>
  );
};

export default ModernForm;
