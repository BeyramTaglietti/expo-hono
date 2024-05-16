import { Text, TouchableOpacity } from "react-native";

export const AmazingButton = () => {
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
