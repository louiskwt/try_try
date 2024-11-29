import {Order} from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Link} from "expo-router";
import {Pressable, StyleSheet, Text, View} from "react-native";

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({order}: OrderListItemProps) => {
  dayjs.extend(relativeTime);
  const createdDate = dayjs(order.created_at);

  return (
    <Link href={`/(user)/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.basicInfoSection}>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.date}>{createdDate.fromNow()}</Text>
        </View>
        <View style={styles.statusSection}>
          <Text style={styles.status}>{order.status}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  basicInfoSection: {
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  date: {
    color: "gray",
  },
  status: {
    fontWeight: "bold",
  },
  statusSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderListItem;
