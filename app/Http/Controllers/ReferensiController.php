<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReferensiController extends Controller
{
    public function wni()
    {
        $data = [
            '101' => config('wni.101'),
            '102' => config('wni.102'),
            '103' => config('wni.103'),
            '104' => config('wni.104'),
            '105' => config('wni.105'),
            '106' => config('wni.106'),
            '107' => config('wni.107'),
            '108' => config('wni.108'),
            '109' => config('wni.109'),
            '110' => config('wni.110'),
            '111' => config('wni.111'),
            '112' => config('wni.112'),
            '113' => config('wni.113'),
            '114' => config('wni.114'),
            '115' => config('wni.115'),
            '116' => config('wni.116'),
            '117' => config('wni.117'),
            '161' => config('wni.161'),
            '201' => config('wni.201'),
            '301' => config('wni.301'),
            '401' => config('wni.401'),
            '501' => config('wni.501'),
            '511' => config('wni.511'),
            '601' => config('wni.601'),
            '602' => config('wni.602'),
            '603' => config('wni.603'),
            '604' => config('wni.604'),
            '611' => config('wni.611'),
            '612' => config('wni.612'),
            '613' => config('wni.613'),
            '614' => config('wni.614'),
            '615' => config('wni.615'),
            '616' => config('wni.616'),
            '617' => config('wni.617'),
            '618' => config('wni.618'),
            '619' => config('wni.619'),
            '620' => config('wni.620'),
            '621' => config('wni.621'),
            '622' => config('wni.622'),
            '623' => config('wni.623'),
            '624' => config('wni.624'),
            '625' => config('wni.625'),
            '626' => config('wni.626'),
            '627' => config('wni.627'),
            '628' => config('wni.628'),
            '701' => config('wni.701'),
            '801' => config('wni.801'),
            '802' => config('wni.802'),
            '851' => config('wni.851'),
            '901' => config('wni.901'),
            '911' => config('wni.911'),
            '912' => config('wni.912'),
            '913' => config('wni.913'),
        ];

        return response()->json($data);
    }

    public function wna()
    {
        $data = [
            '101' => config('wna.101'),
            '201' => config('wna.201'),
            '301' => config('wna.301'),
            '401' => config('wna.401'),
            '501' => config('wna.501'),
            '601' => config('wna.601'),
            '701' => config('wna.701'),
            '801' => config('wna.801'),
            '901' => config('wna.901'),
        ];

        return response()->json($data);
    }
}
