import React, { useState, useEffect } from "react";
import { Form, Input, Button, List, Typography } from "antd";
import { supabase } from "./supabase"; // 引入 supabase 配置

const App = () => {
    const [registrations, setRegistrations] = useState([]);

    const fetchRegistrations = async () => {
        try {
            const { data, error } = await supabase.from("RowData").select("*");
            if (error) throw error;
            setRegistrations(data);
        } catch (error) {
            console.error("Error fetching registrations: ", error);
        }
    };

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const onFinish = async (values) => {
        const formData = {
            name: values.name,
            group: values.group,
            type: values.type,
        };

        try {
            const { data, error } = await supabase.from("RowData").insert([formData]);
            if (error) throw error;
            alert("Registration successful!");
            fetchRegistrations();
        } catch (error) {
            alert("Error registering: " + error.message);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "50px auto", padding: "20px", border: "1px solid #f0f0f0", borderRadius: "8px", backgroundColor: "#fff" }}>
            <Typography.Title level={2} style={{ textAlign: "center" }}>Registration Form</Typography.Title>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name!" }]}
                >
                    <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                    label="Group"
                    name="group"
                    rules={[{ required: true, message: "Please enter a group!" }]}
                >
                    <Input placeholder="Enter group" />
                </Form.Item>

                <Form.Item
                    label="Type"
                    name="type"
                    rules={[{ required: true, message: "Please enter a type!" }]}
                >
                    <Input placeholder="Enter type" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Register
                    </Button>
                </Form.Item>
            </Form>

            <Typography.Title level={3} style={{ marginTop: "30px" }}>Registrations</Typography.Title>
            <List
                bordered
                dataSource={registrations}
                renderItem={(item) => (
                    <List.Item>
                        {`${item.name} - ${item.group} - ${item.type}`}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default App;
