import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import SummaryList from "../../components/SummaryList/SummaryList"
import textResources from "../../resources/dashBoardTextResouces.json"
import { Paper } from "@mui/material";


const OrcamentoView = () => {
    const [measurementData, setMeasurementData] = useState([]);

    const handleInputSubmit = (e, newMeasurementData) => {
        e.preventDefault();
        const indexExistingStage = measurementData.findIndex((stage) => stage.etapa === newMeasurementData.etapa );
        indexExistingStage !== -1 ? measurementData[indexExistingStage].inputs.push(...newMeasurementData.inputs) : measurementData.push(newMeasurementData);
        setMeasurementData([...measurementData]);
    };
    return (
        <div>
            <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  
                  }}
                >
            <>
                {
                    measurementData.length ? (<SummaryList list={measurementData}  title={textResources.budgetLaje} />) 
                    : 
                    null
                }
                    <Popup onHandleCalcSubmit={handleInputSubmit} />
            </> 
            </Paper>
        </div>
    )
};

export default OrcamentoView;