import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export const AmazingButton = () => {
  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <TouchableOpacity className="bg-red-500">
      <Text className="text-yellow-500">My amazing button</Text>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        I Am Not Native Winded
      </Text>
    </TouchableOpacity>
  );
};
