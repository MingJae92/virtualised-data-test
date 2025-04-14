import { describe, test } from "vitest";
import Virtualiseddata from "../component/Virtualiseddata";
import {  render } from "@testing-library/react";


describe("Vitualised component", ()=>{
    test("Data is fetched", async()=>{
        render (<Virtualiseddata/>)
    })
})