import { Button } from "@/src/components/common/button";
import { FormTextInput, SelectInput } from "@/src/components/common/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ChildDetails = ({ setStage, setFormData }: any) => {
  const [numberOfChildren, setNumberOfChildren] = React.useState<number | null>(null);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      birthType: "",
      // childName: {
      //   first: "",
      //   middle: "",
      //   last: "",
      // },
      sex: "",
      dateOfBirth: "",
      timeOfBirth: "",
      customNumberOfChildren: "",
    },
  });

  const onSubmit = (reqData: any) => {
    console.log(reqData);
    // setFormData({ ...reqData });
    // setStage(1);
  };

  const handleBirthTypeChange = () => {
    console.log("THIS IS THE BIRTH TYPE", watch("birthType"))
    const selectedValue = watch("birthType")
    if (selectedValue === "Other") {
      setNumberOfChildren(null);
    } else {
      setNumberOfChildren(Number(selectedValue));
    }
  };
  

  const handleOtherChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customValue = parseInt(e.target.value, 10);
    setNumberOfChildren(isNaN(customValue) ? null : customValue);
  };

  useEffect(() => {
    handleBirthTypeChange()
  }, [ watch("birthType")])

  return (
    <section className="change-password">
      <form onSubmit={handleSubmit(onSubmit)} className="change-password_form">
        <SelectInput
          label="Birth Type"
          name="birthType"
          options={[
            { label: "Single", value: "1" },
            { label: "Twin", value: "2" },
            { label: "Triplet", value: "3" },
            { label: "Quadruplet", value: "4" },
            { label: "Quintuplet", value: "5" },
            { label: "Other", value: "Other" },
          ]}
          register={register}
          validation={{ required: true }}
          id={"birthType"}
          error={!!errors.birthType}
        />

        {watch("birthType") == "Other" && (
          <FormTextInput
            label="Enter Number of Children"
            name="customNumberOfChildren"
            type="number"
            min={1}
            onChange={handleOtherChildrenChange}
            validation={{ required: true }}
            error={errors.customNumberOfChildren}
          />
        )}

        {numberOfChildren !== null && Array.from({ length: numberOfChildren }).map((_:any, index: any) => (
          <div key={index} className="change-password_form">
            <FormTextInput
              label={`Child ${index + 1} - First Name`}
              name={`childName[${index}].first`}
              register={register}
              validation={{ required: true }}
              error={errors.childName?.[index]?.first}
            />
            <FormTextInput
              label={`Child ${index + 1} - Middle Name`}
              name={`childName[${index}].middle`}
              register={register}
              validation={{ required: true }}
              error={errors.childName?.[index]?.middle}
            />
            <FormTextInput
              label={`Child ${index + 1} - Last Name`}
              name={`childName[${index}].last`}
              register={register}
              validation={{ required: true }}
              error={errors.childName?.[index]?.last}
            />
            <SelectInput
              label="Sex"
              name={`pikin[${index}].sex`}
              options={[
                { label: "Male", value: "M" },
                { label: "Female", value: "F" },
              ]}
              register={register}
              validation={{ required: true }}
              id={`sex_${index}`}
              error={!!errors.pikin?.[index]?.sex}
            />
            <FormTextInput
              label="Date of Birth"
              name={`pikin[${index}].dateOfBirth`}
              type="date"
              register={register}
              validation={{ required: true }}
              error={errors.pikin?.[index]?.dateOfBirth}
            />
            <FormTextInput
              label="Time of Birth"
              name={`pikin[${index}].timeOfBirth`}
              type="time"
              register={register}
              validation={{ required: true }}
              error={errors.pikin?.[index]?.timeOfBirth}
            />
          </div>
        ))}

        <Button text="Proceed" />
      </form>
    </section>
  );
};

export default ChildDetails;
