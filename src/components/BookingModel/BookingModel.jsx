import { Button, MantineProvider, Modal } from "@mantine/core";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import { bookVisit } from "../../utils/api";

const BookingModel = ({ opened, setOpened, propertyId, email }) => {
  const [value, setValue] = useState(null);
  const{mutate, isLoading} = useMutation({
    mutationFn: () => bookVisit(value,  propertyId, email)
  })
  // console.log(mutate)
  return (
    <MantineProvider>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select your of visit"
        centered
      >
        <div className="">
          <DatePicker

            value={value}
            onChange={setValue}
            minDate={new Date()}
            style={{ width: "100%", marginBottom: "16px" }} // Adjust the styles accordingly
          />

          <Button disabled={!value} onClick={() => mutate()}
          >Book visit</Button>
        </div>
      </Modal>
    </MantineProvider>
  );
};

export default BookingModel;
