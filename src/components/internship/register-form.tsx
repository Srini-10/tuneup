import { Box, Button, Flex, Input, NativeSelect } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  mobile_number: string;
  secondary_number?: string;
  college_name: string;
  cgpa: string;
  studyyear: string;
  skill_level: String;
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
      secondary_number: data?.secondary_number,
      skill_level: data.skill_level,
      college_name: data.college_name,
      studying_year: data.studyyear,
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
        <Flex justify="space-around">
          <Box>
            <Input.Label required={true}>Name</Input.Label>
            <Input size="md" radius="md" mb="md" {...register("name")} />
            <Input.Error mb="md">
              {getValues("name") === "" && "Name is Required"}
            </Input.Error>
          </Box>
          <Box>
            <Input.Label required={true}>Email</Input.Label>
            <Input mb="md" size="md" radius="md" {...register("email")} />
            <Input.Error mb="md">
              {getValues("email") === "" && "Email is Required"}
            </Input.Error>
          </Box>
        </Flex>
        <Flex justify="space-around">
          <Box>
            <Input.Label required={true}>Mobile Number</Input.Label>
            <Input
              mb="md"
              size="md"
              radius="md"
              {...register("mobile_number")}
            />
            <Input.Error mb="md">
              {getValues("mobile_number") === "" && "Mobile Number is Required"}
            </Input.Error>
          </Box>
          <Box>
            <Input.Label>Secondary Number</Input.Label>
            <Input
              mb="md"
              size="md"
              radius="md"
              {...register("secondary_number")}
            />
          </Box>
        </Flex>
        <Flex justify="space-around">
          <Box>
            <Input.Label required={true}>College name</Input.Label>
            <Input
              mb="md"
              size="md"
              radius="md"
              {...register("college_name")}
            />
            <Input.Error mb="md">
              {getValues("college_name") === "" && "College name is Required"}
            </Input.Error>
          </Box>
          <Box>
            <Input.Label required={true}>CGPA in %</Input.Label>
            <Input mb="md" size="md" radius="md" {...register("cgpa")} />
            <Input.Error mb="md">
              {getValues("cgpa") === "" && "Overall CGPA is Required"}
            </Input.Error>
          </Box>
        </Flex>
        <Flex justify="space-around">
          <Box w="35%">
            <NativeSelect
              mb="md"
              label="Skill level"
              radius="sm"
              size="md"
              variant="filled"
              data={["Begginner", "Intermediate", "Advanced"]}
              {...register("skill_level")}
              required={true}
            />
          </Box>
          <Box w="35%">
            <NativeSelect
              mb="md"
              radius="sm"
              w="full"
              size="md"
              label="Course"
              variant="filled"
              data={["Front end", "Python", "My SQL", "Digital Marketing"]}
              {...register("course")}
              required={true}
            />
          </Box>
        </Flex>
        <Flex justify="flex-start" mt="sm">
          <Box ml={45}>
            <Input.Label required={true}>Studying year</Input.Label>
            <Input mb="md" size="md" radius="md" {...register("studyyear")} />
            <Input.Error mb="md">
              {getValues("studyyear") === "" && "Study Year is Required"}
            </Input.Error>
          </Box>
        </Flex>
        <Flex justify="center" m="auto" mt="xl">
          <Button onClick={handleSubmit(onSubmit)}>Register</Button>
        </Flex>
      </form>
    </>
  );
};

export default RegisterForm;
