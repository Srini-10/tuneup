import { Button, Flex, Input, NativeSelect } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  mobile_number: string;
  college_name: string;
  cgpa: string;
  course: string;
};

type IProps = {
  closeModal: any;
};

const RegisterForm = ({ closeModal }: IProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const studentData = {
      name: data.name,
      email: data.email,
      mobile_number: data.mobile_number,
      college_name: data.college_name,
      overall_cgpa: data.cgpa,
      course: data.course,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    };
    const url = "https://tuneup-svc.onrender.com/register";
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went Wrong");
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Register successfully");
        closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <form>
        <Input.Label>Name</Input.Label>
        <Input mb="md" {...register("name")} />
        <Input.Error mb="md">
          {getValues("name") === "" && "Name is Required"}
        </Input.Error>
        <Input.Label>Email</Input.Label>
        <Input mb="md" {...register("email")} />
        <Input.Error mb="md">
          {getValues("email") === "" && "Email is Required"}
        </Input.Error>
        <Input.Label>Mobile Number</Input.Label>
        <Input mb="md" {...register("mobile_number")} />
        <Input.Error mb="md">
          {getValues("mobile_number") === "" && "Mobile Number is Required"}
        </Input.Error>
        <Input.Label>College name</Input.Label>
        <Input mb="md" {...register("college_name")} />
        <Input.Error mb="md">
          {getValues("college_name") === "" && "College name is Required"}
        </Input.Error>
        <Input.Label>Overall CGPA</Input.Label>
        <Input mb="md" {...register("cgpa")} />
        <Input.Error mb="md">
          {getValues("cgpa") === "" && "Overall CGPA is Required"}
        </Input.Error>
        <NativeSelect
          mb="md"
          label="Course"
          data={["Front end", "Python", "My SQL", "Digital Marketing"]}
          {...register("course")}
        />
        <Flex justify="center" m="auto" mt="xl">
          <Button onClick={handleSubmit(onSubmit)}>Register</Button>
        </Flex>
      </form>
    </>
  );
};

export default RegisterForm;
