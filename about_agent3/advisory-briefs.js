window.ADVISORY_BRIEFS = {
  "CL-0002": {
    "client_id": "CL-0002",
    "client_name": "Ravi Chandrasekaran",
    "risk_profile": "Growth",
    "portfolio_ids": [
      "PF-0003",
      "PF-0004"
    ],
    "situation_summary": "Ravi Chandrasekaran (Growth risk profile, AUM ~46,699,200 USD). Across 2 portfolio(s), average value change is 12.22% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Growth Portfolio",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 11876500.0
          },
          {
            "date": "2026-02-27",
            "value": 12683100.0
          },
          {
            "date": "2026-03-31",
            "value": 12231550.0
          },
          {
            "date": "2026-06-30",
            "value": 14370100.0
          },
          {
            "date": "2026-08-26",
            "value": 14779200.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 11876500.0,
        "last_value": 14779200.0,
        "change_pct": 24.44,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -3.56
      },
      {
        "portfolio_name": "Founder Shareholding Custody",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 31920000.0
          },
          {
            "date": "2026-02-27",
            "value": 31920000.0
          },
          {
            "date": "2026-03-31",
            "value": 31920000.0
          },
          {
            "date": "2026-06-30",
            "value": 31920000.0
          },
          {
            "date": "2026-08-26",
            "value": 31920000.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 31920000.0,
        "last_value": 31920000.0,
        "change_pct": 0.0,
        "path_shape": "steady",
        "max_drawdown_pct_from_peak": 0.0
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 28902000.0,
      "total_market_value_base": 46699200.0,
      "worst_positions": [
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 15600.0,
          "unrealised_pnl_pct": 1.29
        },
        {
          "instrument_name": "Equity Linked Note ref. Helios Cloud Systems, 11.00% p.a., 6M",
          "unrealised_pnl_base": 72000.0,
          "unrealised_pnl_pct": 4.8
        },
        {
          "instrument_name": "Unlisted Holding - Aranya Technologies Pte Ltd",
          "unrealised_pnl_base": 24890000.0,
          "unrealised_pnl_pct": 354.05
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "concentration",
        "instrument_name": "US Technology Leaders Fund",
        "actual_pct": 24.04,
        "max_single_position_pct": 15.0,
        "description": "US Technology Leaders Fund is 24.0% of the portfolio, above the mandate's single-position limit of 15.0%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Cash and Equivalents",
        "actual_pct": 0.0,
        "min_pct": 1,
        "max_pct": 12,
        "description": "Cash and Equivalents is at 0.0% of the portfolio, outside the mandate's allowed range of 1-12%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 0.0,
        "min_pct": 5,
        "max_pct": 25,
        "description": "Fixed Income is at 0.0% of the portfolio, outside the mandate's allowed range of 5-25%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Equity",
        "actual_pct": 0.0,
        "min_pct": 50,
        "max_pct": 78,
        "description": "Equity is at 0.0% of the portfolio, outside the mandate's allowed range of 50-78%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Alternatives",
        "actual_pct": 100.0,
        "min_pct": 0,
        "max_pct": 30,
        "description": "Alternatives is at 100.0% of the portfolio, outside the mandate's allowed range of 0-30%."
      },
      {
        "type": "concentration",
        "instrument_name": "Unlisted Holding - Aranya Technologies Pte Ltd",
        "actual_pct": 100.0,
        "max_single_position_pct": 15.0,
        "description": "Unlisted Holding - Aranya Technologies Pte Ltd is 100.0% of the portfolio, above the mandate's single-position limit of 15.0%."
      }
    ],
    "credit_facility_status": {
      "facility_id": "CF-0001",
      "facility_type": "Lombard Credit Facility",
      "as_of": "2026-08-26",
      "drawn": 6500000.0,
      "ltv_pct": 73.71,
      "margin_call_ltv_pct": 75.0,
      "headroom": 2318810.0,
      "gap_to_margin_call_pct_points": 1.29,
      "urgent": true,
      "note": "LTV (Loan-to-Value) is the loan amount as a percentage of the collateral backing it. If it crosses the margin call threshold, the bank can force-sell collateral automatically."
    },
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Estimated Singapore tax on secondary share sale",
          "amount": 4200000,
          "currency": "USD",
          "due_from": "2027-01-01",
          "due_to": "2027-04-30",
          "certainty": "Conditional on the sale completing"
        },
        {
          "description": "Family trust establishment and funding",
          "amount": 2000000,
          "currency": "USD",
          "due_from": "2026-11-01",
          "due_to": "2027-03-31",
          "certainty": "Likely"
        }
      ],
      "total_planned_needs": 6200000.0,
      "liquid_assets_available": 1000000.0,
      "shortfall": 5200000.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": {
      "risk_tolerance_score": "8",
      "actual_equity_pct": 23.53,
      "expected_equity_pct_approx": "64",
      "direction": "lower",
      "description": "Portfolio equity weight (23.5%) is notably lower than what the client's stated risk tolerance score of 8/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-02-03",
        "note": "Secondary sale process is progressing, bankers indicate Q4 2026 at a valuation meaningfully above the last round. Client wants to avoid selling any listed positions before then because he views the tech complex as the best place to be. Comfortable increasing the Lombard line if needed."
      },
      {
        "date": "2026-06-11",
        "note": "Difficult call. Client was agitated about the drop in his technology holdings last week and the effect on his collateral value. Drew a further USD 1.7m to fund a pre-IPO secondary. I flagged that this increases his utilisation at exactly the moment his collateral is most volatile. He acknowledged the point but proceeded. Needs monitoring."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Reduce credit facility utilisation",
        "rationale": "LTV is at 73.71%, only 1.29 points from the 75.0% margin call trigger — the bank could force-sell collateral automatically if this isn't addressed.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD (within days)",
            "description": "Confirm with client whether outside cash is available to pay down the facility."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Calculate paydown amount needed to bring LTV back to a safe buffer (e.g. 10+ points below trigger)."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: US Technology Leaders Fund is 24.0% of the portfolio, above the mandate's single-position limit of 15.0%.; Cash and Equivalents is at 0.0% of the portfolio, outside the mandate's allowed range of 1-12%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 6,200,000 in known upcoming cash needs but only 1,000,000 in liquid/cash holdings — a gap of 5,200,000.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 3,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Reduce credit facility utilisation"
  },
  "CL-0003": {
    "client_id": "CL-0003",
    "client_name": "Margarethe Voss-Brenner",
    "risk_profile": "Conservative",
    "portfolio_ids": [
      "PF-0005"
    ],
    "situation_summary": "Margarethe Voss-Brenner (Conservative risk profile, AUM ~22,181,136 EUR). Across 1 portfolio(s), average value change is 0.19% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Inherited Portfolio - Under Review",
        "base_currency": "EUR",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 20273256.61
          },
          {
            "date": "2026-02-27",
            "value": 20850743.23
          },
          {
            "date": "2026-03-31",
            "value": 19869207.46
          },
          {
            "date": "2026-06-30",
            "value": 20188438.85
          },
          {
            "date": "2026-08-26",
            "value": 20312395.29
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 20273256.61,
        "last_value": 20312395.29,
        "change_pct": 0.19,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -4.71
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 2395595.73,
      "total_market_value_base": 20312395.29,
      "worst_positions": [
        {
          "instrument_name": "EUR Investment Grade Bond Fund",
          "unrealised_pnl_base": -226000.0,
          "unrealised_pnl_pct": -10.84
        },
        {
          "instrument_name": "EUR Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "CHF Call Deposit",
          "unrealised_pnl_base": 6170.16,
          "unrealised_pnl_pct": 0.94
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 9.15,
        "min_pct": 45,
        "max_pct": 75,
        "description": "Fixed Income is at 9.1% of the portfolio, outside the mandate's allowed range of 45-75%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Equity",
        "actual_pct": 71.46,
        "min_pct": 10,
        "max_pct": 30,
        "description": "Equity is at 71.5% of the portfolio, outside the mandate's allowed range of 10-30%."
      },
      {
        "type": "concentration",
        "instrument_name": "Global Luxury and Consumer Brands Fund",
        "actual_pct": 26.06,
        "max_single_position_pct": 10.0,
        "description": "Global Luxury and Consumer Brands Fund is 26.1% of the portfolio, above the mandate's single-position limit of 10.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "German inheritance tax instalment",
          "amount": 3400000,
          "currency": "EUR",
          "due_from": "2026-10-01",
          "due_to": "2026-12-31",
          "certainty": "Confirmed"
        }
      ],
      "total_planned_needs": 3400000.0,
      "liquid_assets_available": 1561192.0,
      "shortfall": 1838808.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": {
      "risk_tolerance_score": "2",
      "actual_equity_pct": 71.46,
      "expected_equity_pct_approx": "16",
      "direction": "higher",
      "description": "Portfolio equity weight (71.5%) is notably higher than what the client's stated risk tolerance score of 2/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-02-16",
        "note": "First meeting following the transfer in. Mrs Voss-Brenner is still grieving and asked that we not make any changes for now. She said several times that she does not understand what is in the portfolio and that her husband handled all of it. She described herself as someone who has never taken a risk with money. Risk profiling completed as Conservative. The portfolio as transferred is not conservative."
      },
      {
        "date": "2026-05-29",
        "note": "Client asked whether she should be worried about the news from the Middle East. Sent a short note. She replied asking whether her portfolio would be affected and said she would prefer 'something safe and boring'. German inheritance tax instalment of around EUR 3.4m falls due before year end."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Fixed Income is at 9.1% of the portfolio, outside the mandate's allowed range of 45-75%.; Equity is at 71.5% of the portfolio, outside the mandate's allowed range of 10-30%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 3,400,000 in known upcoming cash needs but only 1,561,192 in liquid/cash holdings — a gap of 1,838,808.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      },
      {
        "title": "Review risk alignment with client",
        "rationale": "Portfolio equity weight (71.5%) is notably higher than what the client's stated risk tolerance score of 2/10 would suggest.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Discuss with client whether current risk positioning still matches their comfort level and goals."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Document outcome of the conversation in RM notes for future reference."
          }
        ],
        "urgency_rank": 3,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0006": {
    "client_id": "CL-0006",
    "client_name": "Nguyen Thi Bao Tran",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0008"
    ],
    "situation_summary": "Nguyen Thi Bao Tran (Balanced risk profile, AUM ~18,072,993 SGD). Across 1 portfolio(s), average value change is -1.58% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Portfolio",
        "base_currency": "SGD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 24827328.0
          },
          {
            "date": "2026-02-27",
            "value": 25177590.5
          },
          {
            "date": "2026-03-31",
            "value": 24559016.5
          },
          {
            "date": "2026-06-30",
            "value": 24594224.5
          },
          {
            "date": "2026-08-26",
            "value": 24434687.2
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 24827328.0,
        "last_value": 24434687.2,
        "change_pct": -1.58,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -2.95
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 522983.2,
      "total_market_value_base": 24434687.2,
      "worst_positions": [
        {
          "instrument_name": "Singapore Government Securities 2.75% due 2036",
          "unrealised_pnl_base": -546000.0,
          "unrealised_pnl_pct": -9.02
        },
        {
          "instrument_name": "Singapore REIT Income Fund",
          "unrealised_pnl_base": -435000.0,
          "unrealised_pnl_pct": -11.63
        },
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -12748.8,
          "unrealised_pnl_pct": -0.8
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "concentration",
        "instrument_name": "Singapore Government Securities 2.75% due 2036",
        "actual_pct": 22.54,
        "max_single_position_pct": 12.0,
        "description": "Singapore Government Securities 2.75% due 2036 is 22.5% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "US university fees, two children",
          "amount": 5000000,
          "currency": "USD",
          "due_from": "2026-09-01",
          "due_to": "2030-09-01",
          "certainty": "Confirmed"
        },
        {
          "description": "Private equity capital calls",
          "amount": 3000000,
          "currency": "USD",
          "due_from": "2026-10-01",
          "due_to": "2028-03-31",
          "certainty": "Likely"
        }
      ],
      "total_planned_needs": 8000000.0,
      "liquid_assets_available": 2800000.0,
      "shortfall": 5200000.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-05-12",
        "note": "Client needs USD liquidity for capital calls and the first US tuition instalment. Submitted a redemption on the private credit fund. Warned her about the gate. She was surprised that a fund she thought of as conservative could restrict withdrawals. Most of her assets are Singapore dollar denominated and her obligations are in US dollars, which has become more expensive this year."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Singapore Government Securities 2.75% due 2036 is 22.5% of the portfolio, above the mandate's single-position limit of 12.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 8,000,000 in known upcoming cash needs but only 2,800,000 in liquid/cash holdings — a gap of 5,200,000.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0008": {
    "client_id": "CL-0008",
    "client_name": "Chen Wei Ling",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0010"
    ],
    "situation_summary": "Chen Wei Ling (Balanced risk profile, AUM ~11,952,546 SGD). Across 1 portfolio(s), average value change is 3.19% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Portfolio",
        "base_currency": "SGD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 15660203.6
          },
          {
            "date": "2026-02-27",
            "value": 16087153.2
          },
          {
            "date": "2026-03-31",
            "value": 15864324.4
          },
          {
            "date": "2026-06-30",
            "value": 16079217.4
          },
          {
            "date": "2026-08-26",
            "value": 16159842.24
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 15660203.6,
        "last_value": 16159842.24,
        "change_pct": 3.19,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -1.39
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 1490035.44,
      "total_market_value_base": 16159842.24,
      "worst_positions": [
        {
          "instrument_name": "Singapore Government Securities 2.75% due 2036",
          "unrealised_pnl_base": -255000.0,
          "unrealised_pnl_pct": -8.47
        },
        {
          "instrument_name": "Singapore REIT Income Fund",
          "unrealised_pnl_base": -199200.0,
          "unrealised_pnl_pct": -13.09
        },
        {
          "instrument_name": "SGD Fixed Deposit 3M",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "concentration",
        "instrument_name": "Singapore Government Securities 2.75% due 2036",
        "actual_pct": 17.04,
        "max_single_position_pct": 12.0,
        "description": "Singapore Government Securities 2.75% due 2036 is 17.0% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "University fees, two children",
          "amount": 420000,
          "currency": "SGD",
          "due_from": "2027-01-01",
          "due_to": "2033-01-01",
          "certainty": "Confirmed"
        }
      ],
      "total_planned_needs": 420000.0,
      "liquid_assets_available": 2200000.0,
      "shortfall": 0.0,
      "has_shortfall": "False"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-06-18",
        "note": "Eldest starts at a UK university in September 2027, second child two years later. Combined fees and living costs estimated at SGD 420k a year for six years. Client wants certainty on this and is willing to accept lower returns on the portion that funds it. Also mentioned she is in early discussions about selling a minority stake in the franchise business in 2028."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Singapore Government Securities 2.75% due 2036 is 17.0% of the portfolio, above the mandate's single-position limit of 12.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0009": {
    "client_id": "CL-0009",
    "client_name": "Andreas Lindqvist",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0011"
    ],
    "situation_summary": "Andreas Lindqvist (Balanced risk profile, AUM ~31,613,603 EUR). Across 1 portfolio(s), average value change is 1.96% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Post-Sale Deployment Portfolio",
        "base_currency": "EUR",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 28393209.21
          },
          {
            "date": "2026-02-27",
            "value": 28730602.62
          },
          {
            "date": "2026-03-31",
            "value": 28318526.7
          },
          {
            "date": "2026-06-30",
            "value": 28740691.63
          },
          {
            "date": "2026-08-26",
            "value": 28950186.3
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 28393209.21,
        "last_value": 28950186.3,
        "change_pct": 1.96,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -1.43
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 3338601.23,
      "total_market_value_base": 28950186.3,
      "worst_positions": [
        {
          "instrument_name": "EUR Investment Grade Bond Fund",
          "unrealised_pnl_base": -267000.0,
          "unrealised_pnl_pct": -8.74
        },
        {
          "instrument_name": "EUR Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "CHF Call Deposit",
          "unrealised_pnl_base": 25824.3,
          "unrealised_pnl_pct": 0.99
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Cash and Equivalents",
        "actual_pct": 44.98,
        "min_pct": 2,
        "max_pct": 18,
        "description": "Cash and Equivalents is at 45.0% of the portfolio, outside the mandate's allowed range of 2-18%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 14.45,
        "min_pct": 25,
        "max_pct": 50,
        "description": "Fixed Income is at 14.5% of the portfolio, outside the mandate's allowed range of 25-50%."
      },
      {
        "type": "concentration",
        "instrument_name": "EUR Call Deposit",
        "actual_pct": 33.85,
        "max_single_position_pct": 12.0,
        "description": "EUR Call Deposit is 33.9% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [],
      "total_planned_needs": 0.0,
      "liquid_assets_available": 13022789.97,
      "shortfall": 0.0,
      "has_shortfall": false
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-03-02",
        "note": "Second attempt at a deployment plan. Client agreed the allocation in principle in October 2024 and again in June 2025 but has not executed. He says he is waiting for a better entry point. I showed him what the cash has cost him against the agreed benchmark since the sale. He was quiet, then said he would think about it. Also unwilling to sell the residual Nordvind stake for sentimental reasons."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Cash and Equivalents is at 45.0% of the portfolio, outside the mandate's allowed range of 2-18%.; Fixed Income is at 14.5% of the portfolio, outside the mandate's allowed range of 25-50%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0011": {
    "client_id": "CL-0011",
    "client_name": "Tan Boon Huat",
    "risk_profile": "Conservative",
    "portfolio_ids": [
      "PF-0013"
    ],
    "situation_summary": "Tan Boon Huat (Conservative risk profile, AUM ~35,335,041 SGD). Across 1 portfolio(s), average value change is -2.25% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Consolidated Family Account",
        "base_currency": "SGD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 48873096.0
          },
          {
            "date": "2026-02-27",
            "value": 49334606.0
          },
          {
            "date": "2026-03-31",
            "value": 48433360.0
          },
          {
            "date": "2026-06-30",
            "value": 48335709.0
          },
          {
            "date": "2026-08-26",
            "value": 47772976.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 48873096.0,
        "last_value": 47772976.0,
        "change_pct": -2.25,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -3.17
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 6432040.0,
      "total_market_value_base": 47772976.0,
      "worst_positions": [
        {
          "instrument_name": "Singapore Government Securities 2.75% due 2036",
          "unrealised_pnl_base": -742000.0,
          "unrealised_pnl_pct": -10.35
        },
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -217936.0,
          "unrealised_pnl_pct": -3.98
        },
        {
          "instrument_name": "Singapore REIT Income Fund",
          "unrealised_pnl_base": -132000.0,
          "unrealised_pnl_pct": -2.13
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 24.47,
        "min_pct": 45,
        "max_pct": 75,
        "description": "Fixed Income is at 24.5% of the portfolio, outside the mandate's allowed range of 45-75%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Alternatives",
        "actual_pct": 47.28,
        "min_pct": 0,
        "max_pct": 15,
        "description": "Alternatives is at 47.3% of the portfolio, outside the mandate's allowed range of 0-15%."
      },
      {
        "type": "concentration",
        "instrument_name": "Asia Real Estate Opportunity Fund III",
        "actual_pct": 20.42,
        "max_single_position_pct": 10.0,
        "description": "Asia Real Estate Opportunity Fund III is 20.4% of the portfolio, above the mandate's single-position limit of 10.0%."
      }
    ],
    "credit_facility_status": {
      "facility_id": "CF-0004",
      "facility_type": "Property Backed Term Loan",
      "as_of": "2026-08-26",
      "drawn": 6000000.0,
      "ltv_pct": 32.29,
      "margin_call_ltv_pct": 80.0,
      "headroom": 12582564.4,
      "gap_to_margin_call_pct_points": 47.71,
      "urgent": false,
      "note": "LTV (Loan-to-Value) is the loan amount as a percentage of the collateral backing it. If it crosses the margin call threshold, the bank can force-sell collateral automatically."
    },
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Estate duty and legal costs on succession planning",
          "amount": 2800000,
          "currency": "SGD",
          "due_from": "2026-12-01",
          "due_to": "2027-12-31",
          "certainty": "Likely"
        }
      ],
      "total_planned_needs": 2800000.0,
      "liquid_assets_available": 3200000.0,
      "shortfall": 0.0,
      "has_shortfall": "False"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-05-20",
        "note": "Succession discussion, fourth attempt. Four children, two involved in the business and two not. No trust or holding structure in place. Client is 78 and in declining health. The bulk of the estate is illiquid Singapore property. If anything happens before a structure exists the family will have to sell assets into whatever market exists at the time. He asked for more time to think."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Fixed Income is at 24.5% of the portfolio, outside the mandate's allowed range of 45-75%.; Alternatives is at 47.3% of the portfolio, outside the mandate's allowed range of 0-15%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0013": {
    "client_id": "CL-0013",
    "client_name": "Zhang Meiling",
    "risk_profile": "Growth",
    "portfolio_ids": [
      "PF-0015"
    ],
    "situation_summary": "Zhang Meiling (Growth risk profile, AUM ~36,952,084 USD). Across 1 portfolio(s), average value change is 18.57% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Growth Portfolio",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 31165393.58
          },
          {
            "date": "2026-02-27",
            "value": 33040984.62
          },
          {
            "date": "2026-03-31",
            "value": 31881276.78
          },
          {
            "date": "2026-06-30",
            "value": 35912924.3
          },
          {
            "date": "2026-08-26",
            "value": 36952084.12
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 31165393.58,
        "last_value": 36952084.12,
        "change_pct": 18.57,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -3.51
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 10004207.1,
      "total_market_value_base": 36952084.12,
      "worst_positions": [
        {
          "instrument_name": "Greater China Equity Fund",
          "unrealised_pnl_base": -359692.9,
          "unrealised_pnl_pct": -9.83
        },
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 32000.0,
          "unrealised_pnl_pct": 1.6
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "concentration",
        "instrument_name": "US Technology Leaders Fund",
        "actual_pct": 22.43,
        "max_single_position_pct": 15.0,
        "description": "US Technology Leaders Fund is 22.4% of the portfolio, above the mandate's single-position limit of 15.0%."
      }
    ],
    "credit_facility_status": {
      "facility_id": "CF-0003",
      "facility_type": "Lombard Credit Facility",
      "as_of": "2026-08-26",
      "drawn": 4200000.0,
      "ltv_pct": 20.39,
      "margin_call_ltv_pct": 75.0,
      "headroom": 16399640.47,
      "gap_to_margin_call_pct_points": 54.61,
      "urgent": false,
      "note": "LTV (Loan-to-Value) is the loan amount as a percentage of the collateral backing it. If it crosses the margin call threshold, the bank can force-sell collateral automatically."
    },
    "cash_flow_gap": {
      "planned_needs": [],
      "total_planned_needs": 0.0,
      "liquid_assets_available": 1900000.0,
      "shortfall": 0.0,
      "has_shortfall": false
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-06-12",
        "note": "Client sees the technology drawdown as a buying opportunity and wants more, not less. She was dismissive of the suggestion that her exposure to a single name is high once the note is counted. Her view is that she understands the sector better than the bank does, which is not an unreasonable position given her background. Credit line unchanged at USD 4.2m drawn."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: US Technology Leaders Fund is 22.4% of the portfolio, above the mandate's single-position limit of 15.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0014": {
    "client_id": "CL-0014",
    "client_name": "Lau Chi Ming",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0016"
    ],
    "situation_summary": "Lau Chi Ming (Balanced risk profile, AUM ~26,488,971 HKD). Across 1 portfolio(s), average value change is -5.77% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Portfolio",
        "base_currency": "HKD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 219536340.0
          },
          {
            "date": "2026-02-27",
            "value": 245469500.0
          },
          {
            "date": "2026-03-31",
            "value": 222792925.0
          },
          {
            "date": "2026-06-30",
            "value": 212160650.0
          },
          {
            "date": "2026-08-26",
            "value": 206878860.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 219536340.0,
        "last_value": 206878860.0,
        "change_pct": -5.77,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -15.72
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": -50114640.0,
      "total_market_value_base": 206878860.0,
      "worst_positions": [
        {
          "instrument_name": "Golden Harbour Properties 5.25% Perpetual",
          "unrealised_pnl_base": -19001760.0,
          "unrealised_pnl_pct": -41.65
        },
        {
          "instrument_name": "Golden Harbour Properties Ltd",
          "unrealised_pnl_base": -17780000.0,
          "unrealised_pnl_pct": -47.39
        },
        {
          "instrument_name": "Accumulator ref. Golden Harbour Properties Ltd, 12M",
          "unrealised_pnl_base": -10425000.0,
          "unrealised_pnl_pct": -41.7
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Equity",
        "actual_pct": 23.39,
        "min_pct": 30,
        "max_pct": 55,
        "description": "Equity is at 23.4% of the portfolio, outside the mandate's allowed range of 30-55%."
      },
      {
        "type": "concentration",
        "instrument_name": "Direct Property - Mid-Levels Apartment",
        "actual_pct": 19.58,
        "max_single_position_pct": 12.0,
        "description": "Direct Property - Mid-Levels Apartment is 19.6% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": {
      "facility_id": "CF-0002",
      "facility_type": "Lombard Credit Facility",
      "as_of": "2026-08-26",
      "drawn": 58000000.0,
      "ltv_pct": 69.41,
      "margin_call_ltv_pct": 70.0,
      "headroom": 25565930.0,
      "gap_to_margin_call_pct_points": 0.59,
      "urgent": true,
      "note": "LTV (Loan-to-Value) is the loan amount as a percentage of the collateral backing it. If it crosses the margin call threshold, the bank can force-sell collateral automatically."
    },
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Mid-Levels redevelopment equity contribution",
          "amount": 60000000,
          "currency": "HKD",
          "due_from": "2026-11-01",
          "due_to": "2027-06-30",
          "certainty": "Confirmed"
        }
      ],
      "total_planned_needs": 60000000.0,
      "liquid_assets_available": 12000000.0,
      "shortfall": 48000000.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": {
      "risk_tolerance_score": "5",
      "actual_equity_pct": 23.39,
      "expected_equity_pct_approx": "40",
      "direction": "lower",
      "description": "Portfolio equity weight (23.4%) is notably lower than what the client's stated risk tolerance score of 5/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-03-05",
        "note": "Accumulator settlements are running against the client. Drew a further HKD 4m on the facility to meet obligations. Client remains convinced the Hong Kong property market turns this year. I pointed out that the perpetual, the shares, the accumulator and his own development business are all the same bet. He said that is why he is confident."
      },
      {
        "date": "2026-08-11",
        "note": "Redevelopment project needs an HKD 60m equity contribution by mid-2027. Client expects to fund it partly from the portfolio. Reviewed what is actually sellable. He was surprised how little of it is liquid."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Reduce credit facility utilisation",
        "rationale": "LTV is at 69.41%, only 0.59 points from the 70.0% margin call trigger — the bank could force-sell collateral automatically if this isn't addressed.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD (within days)",
            "description": "Confirm with client whether outside cash is available to pay down the facility."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Calculate paydown amount needed to bring LTV back to a safe buffer (e.g. 10+ points below trigger)."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Equity is at 23.4% of the portfolio, outside the mandate's allowed range of 30-55%.; Direct Property - Mid-Levels Apartment is 19.6% of the portfolio, above the mandate's single-position limit of 12.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 60,000,000 in known upcoming cash needs but only 12,000,000 in liquid/cash holdings — a gap of 48,000,000.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 3,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Reduce credit facility utilisation"
  },
  "CL-0015": {
    "client_id": "CL-0015",
    "client_name": "Kim Do-Yoon",
    "risk_profile": "Dynamic Opportunistic",
    "portfolio_ids": [
      "PF-0017"
    ],
    "situation_summary": "Kim Do-Yoon (Dynamic Opportunistic risk profile, AUM ~14,985,636 USD). Across 1 portfolio(s), average value change is 25.25% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Dynamic Opportunistic Portfolio",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 11964226.32
          },
          {
            "date": "2026-02-27",
            "value": 12524283.12
          },
          {
            "date": "2026-03-31",
            "value": 14301050.63
          },
          {
            "date": "2026-06-30",
            "value": 14626478.26
          },
          {
            "date": "2026-08-26",
            "value": 14985635.85
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 11964226.32,
        "last_value": 14985635.85,
        "change_pct": 25.25,
        "path_shape": "steady",
        "max_drawdown_pct_from_peak": 0.0
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 1959162.16,
      "total_market_value_base": 14985635.85,
      "worst_positions": [
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 5400.0,
          "unrealised_pnl_pct": 0.89
        },
        {
          "instrument_name": "Asia ex-Japan Equity Fund",
          "unrealised_pnl_base": 63000.0,
          "unrealised_pnl_pct": 4.75
        }
      ]
    },
    "mandate_breaches": [],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [],
      "total_planned_needs": 0.0,
      "liquid_assets_available": 1050000.0,
      "shortfall": 0.0,
      "has_shortfall": false
    },
    "risk_profile_check": {
      "risk_tolerance_score": "9",
      "actual_equity_pct": 46.6,
      "expected_equity_pct_approx": "72",
      "direction": "lower",
      "description": "Portfolio equity weight (46.6%) is notably lower than what the client's stated risk tolerance score of 9/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-03-18",
        "note": "Client asked for the most aggressive way to express a view that the Middle East situation gets worse before it gets better. Subscribed the energy and technology FCN same day. He understands the payoff structure well and asked good questions about the worst-of feature."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Review risk alignment with client",
        "rationale": "Portfolio equity weight (46.6%) is notably lower than what the client's stated risk tolerance score of 9/10 would suggest.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Discuss with client whether current risk positioning still matches their comfort level and goals."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Document outcome of the conversation in RM notes for future reference."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Review risk alignment with client"
  },
  "CL-0016": {
    "client_id": "CL-0016",
    "client_name": "Yamamoto Kenji",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0018"
    ],
    "situation_summary": "Yamamoto Kenji (Balanced risk profile, AUM ~14,508,067 JPY). Across 1 portfolio(s), average value change is 7.53% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Portfolio",
        "base_currency": "JPY",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 2145212960.0
          },
          {
            "date": "2026-02-27",
            "value": 2214083760.0
          },
          {
            "date": "2026-03-31",
            "value": 2222308840.0
          },
          {
            "date": "2026-06-30",
            "value": 2300366840.0
          },
          {
            "date": "2026-08-26",
            "value": 2306782610.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 2145212960.0,
        "last_value": 2306782610.0,
        "change_pct": 7.53,
        "path_shape": "steady",
        "max_drawdown_pct_from_peak": 0.0
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 628686290.0,
      "total_market_value_base": 2306782610.0,
      "worst_positions": [
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -8570000.0,
          "unrealised_pnl_pct": -2.7
        },
        {
          "instrument_name": "JPY Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 11826000.0,
          "unrealised_pnl_pct": 6.49
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 21.83,
        "min_pct": 25,
        "max_pct": 50,
        "description": "Fixed Income is at 21.8% of the portfolio, outside the mandate's allowed range of 25-50%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Equity",
        "actual_pct": 67.72,
        "min_pct": 30,
        "max_pct": 55,
        "description": "Equity is at 67.7% of the portfolio, outside the mandate's allowed range of 30-55%."
      },
      {
        "type": "concentration",
        "instrument_name": "Kanto Pharma Holdings KK",
        "actual_pct": 20.1,
        "max_single_position_pct": 12.0,
        "description": "Kanto Pharma Holdings KK is 20.1% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Support for elderly parents in Japan",
          "amount": 18000000,
          "currency": "JPY",
          "due_from": "2026-01-01",
          "due_to": "2034-01-01",
          "certainty": "Confirmed"
        }
      ],
      "total_planned_needs": 18000000.0,
      "liquid_assets_available": 180000000.0,
      "shortfall": 0.0,
      "has_shortfall": "False"
    },
    "risk_profile_check": {
      "risk_tolerance_score": "5",
      "actual_equity_pct": 67.72,
      "expected_equity_pct_approx": "40",
      "direction": "higher",
      "description": "Portfolio equity weight (67.7%) is notably higher than what the client's stated risk tolerance score of 5/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-05-07",
        "note": "Retirement to Japan planned for 2030. Client will need yen income at that point and is aware that most of his portfolio is not in yen. He has held the employer shares since 2013 and has an emotional attachment to them. Board position means dealing restrictions apply during closed periods; next open window is November 2026. Supports his parents at around JPY 18m a year."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Fixed Income is at 21.8% of the portfolio, outside the mandate's allowed range of 25-50%.; Equity is at 67.7% of the portfolio, outside the mandate's allowed range of 30-55%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Review risk alignment with client",
        "rationale": "Portfolio equity weight (67.7%) is notably higher than what the client's stated risk tolerance score of 5/10 would suggest.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Discuss with client whether current risk positioning still matches their comfort level and goals."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Document outcome of the conversation in RM notes for future reference."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0017": {
    "client_id": "CL-0017",
    "client_name": "Fong Enterprises Family Office",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0019",
      "PF-0020",
      "PF-0021"
    ],
    "situation_summary": "Fong Enterprises Family Office (Balanced risk profile, AUM ~87,902,980 USD). Across 3 portfolio(s), average value change is 3.76% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Family Office Core Mandate",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 40901240.0
          },
          {
            "date": "2026-02-27",
            "value": 42041260.0
          },
          {
            "date": "2026-03-31",
            "value": 41026130.0
          },
          {
            "date": "2026-06-30",
            "value": 41622224.0
          },
          {
            "date": "2026-08-26",
            "value": 41809580.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 40901240.0,
        "last_value": 41809580.0,
        "change_pct": 2.22,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -2.41
      },
      {
        "portfolio_name": "Alternatives Sleeve",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 33452000.0
          },
          {
            "date": "2026-02-27",
            "value": 33819000.0
          },
          {
            "date": "2026-03-31",
            "value": 33952700.0
          },
          {
            "date": "2026-06-30",
            "value": 33955500.0
          },
          {
            "date": "2026-08-26",
            "value": 34178000.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 33452000.0,
        "last_value": 34178000.0,
        "change_pct": 2.17,
        "path_shape": "steady",
        "max_drawdown_pct_from_peak": 0.0
      },
      {
        "portfolio_name": "Next Generation Account",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 11147600.0
          },
          {
            "date": "2026-02-27",
            "value": 11628800.0
          },
          {
            "date": "2026-03-31",
            "value": 11508500.0
          },
          {
            "date": "2026-06-30",
            "value": 11765900.0
          },
          {
            "date": "2026-08-26",
            "value": 11915400.0
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 11147600.0,
        "last_value": 11915400.0,
        "change_pct": 6.89,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -1.03
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 18598100.0,
      "total_market_value_base": 87902980.0,
      "worst_positions": [
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -414000.0,
          "unrealised_pnl_pct": -6.62
        },
        {
          "instrument_name": "Asia Investment Grade Credit Fund",
          "unrealised_pnl_base": -241500.0,
          "unrealised_pnl_pct": -6.85
        },
        {
          "instrument_name": "US Treasury 4.125% due 2028",
          "unrealised_pnl_base": -31500.0,
          "unrealised_pnl_pct": -0.7
        },
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Global Infrastructure Debt Fund",
          "unrealised_pnl_base": 5000.0,
          "unrealised_pnl_pct": 0.2
        },
        {
          "instrument_name": "Orchard Private Credit Fund II",
          "unrealised_pnl_base": 57000.0,
          "unrealised_pnl_pct": 0.6
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 37500.0,
          "unrealised_pnl_pct": 1.5
        },
        {
          "instrument_name": "USD Money Market Fund",
          "unrealised_pnl_base": 126000.0,
          "unrealised_pnl_pct": 7.13
        },
        {
          "instrument_name": "Global Healthcare Equity Fund",
          "unrealised_pnl_base": 275000.0,
          "unrealised_pnl_pct": 19.84
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Equity",
        "actual_pct": 56.21,
        "min_pct": 30,
        "max_pct": 55,
        "description": "Equity is at 56.2% of the portfolio, outside the mandate's allowed range of 30-55%."
      },
      {
        "type": "concentration",
        "instrument_name": "Global Developed Equity Index Fund",
        "actual_pct": 22.77,
        "max_single_position_pct": 12.0,
        "description": "Global Developed Equity Index Fund is 22.8% of the portfolio, above the mandate's single-position limit of 12.0%."
      },
      {
        "type": "concentration",
        "instrument_name": "Meridian Private Equity Fund VII",
        "actual_pct": 35.3,
        "max_single_position_pct": 25.0,
        "description": "Meridian Private Equity Fund VII is 35.3% of the portfolio, above the mandate's single-position limit of 25.0%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Cash and Equivalents",
        "actual_pct": 15.89,
        "min_pct": 1,
        "max_pct": 12,
        "description": "Cash and Equivalents is at 15.9% of the portfolio, outside the mandate's allowed range of 1-12%."
      },
      {
        "type": "concentration",
        "instrument_name": "US Technology Leaders Fund",
        "actual_pct": 29.82,
        "max_single_position_pct": 15.0,
        "description": "US Technology Leaders Fund is 29.8% of the portfolio, above the mandate's single-position limit of 15.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "G3 education programme",
          "amount": 900000,
          "currency": "USD",
          "due_from": "2026-09-01",
          "due_to": "2034-09-01",
          "certainty": "Confirmed"
        },
        {
          "description": "Outstanding private markets commitments",
          "amount": 15800000,
          "currency": "USD",
          "due_from": "2026-10-01",
          "due_to": "2028-06-30",
          "certainty": "Confirmed"
        }
      ],
      "total_planned_needs": 16700000.0,
      "liquid_assets_available": 5393600.0,
      "shortfall": 11306400.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-02-10",
        "note": "Capital call of USD 3.2m met from the sleeve's cash. Flagged to the family office CFO that between the remaining commitments and the gated private credit position, the sleeve's liquidity is thin. He asked for a full liquidity map before the next investment committee in October."
      },
      {
        "date": "2026-06-30",
        "note": "Investment committee review. G2 wants to keep the core mandate conservative. G3 representatives pushed for more technology and venture exposure in the next generation account. Unresolved. Private credit manager has now gated three consecutive quarters."
      }
    ],
    "note_flags_for_manual_review": [
      "2026-06-30: Investment committee review. G2 wants to keep the core mandate conservative. G3 representatives pushed for more technology and venture exposure in the next generation account. Unresolved. Private credit manager has now gated three consecutive quarters."
    ],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Equity is at 56.2% of the portfolio, outside the mandate's allowed range of 30-55%.; Global Developed Equity Index Fund is 22.8% of the portfolio, above the mandate's single-position limit of 12.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 16,700,000 in known upcoming cash needs but only 5,393,600 in liquid/cash holdings — a gap of 11,306,400.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0018": {
    "client_id": "CL-0018",
    "client_name": "Elena Marchetti-Wong",
    "risk_profile": "Balanced",
    "portfolio_ids": [
      "PF-0022"
    ],
    "situation_summary": "Elena Marchetti-Wong (Balanced risk profile, AUM ~22,597,825 EUR). Across 1 portfolio(s), average value change is 1.99% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Portfolio",
        "base_currency": "EUR",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 20290636.4
          },
          {
            "date": "2026-02-27",
            "value": 21140575.25
          },
          {
            "date": "2026-03-31",
            "value": 20752378.5
          },
          {
            "date": "2026-06-30",
            "value": 20722556.9
          },
          {
            "date": "2026-08-26",
            "value": 20693978.91
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 20290636.4,
        "last_value": 20693978.91,
        "change_pct": 1.99,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -2.11
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 2162975.54,
      "total_market_value_base": 20693978.92,
      "worst_positions": [
        {
          "instrument_name": "EUR Investment Grade Bond Fund",
          "unrealised_pnl_base": -336000.0,
          "unrealised_pnl_pct": -10.15
        },
        {
          "instrument_name": "Greater China Equity Fund",
          "unrealised_pnl_base": -9653.5,
          "unrealised_pnl_pct": -0.57
        },
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -7603.89,
          "unrealised_pnl_pct": -0.42
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "asset_allocation",
        "asset_class": "Fixed Income",
        "actual_pct": 22.98,
        "min_pct": 25,
        "max_pct": 50,
        "description": "Fixed Income is at 23.0% of the portfolio, outside the mandate's allowed range of 25-50%."
      },
      {
        "type": "asset_allocation",
        "asset_class": "Commodities",
        "actual_pct": 14.04,
        "min_pct": 0,
        "max_pct": 10,
        "description": "Commodities is at 14.0% of the portfolio, outside the mandate's allowed range of 0-10%."
      },
      {
        "type": "concentration",
        "instrument_name": "Global Luxury and Consumer Brands Fund",
        "actual_pct": 16.28,
        "max_single_position_pct": 12.0,
        "description": "Global Luxury and Consumer Brands Fund is 16.3% of the portfolio, above the mandate's single-position limit of 12.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Italian succession planning and notarial costs",
          "amount": 850000,
          "currency": "EUR",
          "due_from": "2027-06-01",
          "due_to": "2028-06-30",
          "certainty": "Likely"
        }
      ],
      "total_planned_needs": 850000.0,
      "liquid_assets_available": 2603521.83,
      "shortfall": 0.0,
      "has_shortfall": "False"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-04-22",
        "note": "Client is pleased with the gold position, which she describes as the only thing that has worked. She originally sized it as a 5% hedge. It is now materially larger and she has not sold any. Separately her distribution business is under pressure from weaker Greater China luxury demand, which is the same theme as her largest equity holding."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Fixed Income is at 23.0% of the portfolio, outside the mandate's allowed range of 25-50%.; Commodities is at 14.0% of the portfolio, outside the mandate's allowed range of 0-10%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  },
  "CL-0019": {
    "client_id": "CL-0019",
    "client_name": "Abdullah Al-Mansoori",
    "risk_profile": "Balanced Growth",
    "portfolio_ids": [
      "PF-0023"
    ],
    "situation_summary": "Abdullah Al-Mansoori (Balanced Growth risk profile, AUM ~32,214,266 USD). Across 1 portfolio(s), average value change is 25.92% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Balanced Growth Portfolio",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 25583211.81
          },
          {
            "date": "2026-02-27",
            "value": 26195446.15
          },
          {
            "date": "2026-03-31",
            "value": 27474722.84
          },
          {
            "date": "2026-06-30",
            "value": 31381355.24
          },
          {
            "date": "2026-08-26",
            "value": 32214266.33
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 25583211.81,
        "last_value": 32214266.33,
        "change_pct": 25.92,
        "path_shape": "steady",
        "max_drawdown_pct_from_peak": 0.0
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 6343240.33,
      "total_market_value_base": 32214266.33,
      "worst_positions": [
        {
          "instrument_name": "Emerging Market Sovereign Bond Fund",
          "unrealised_pnl_base": -300000.0,
          "unrealised_pnl_pct": -12.35
        },
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -219000.0,
          "unrealised_pnl_pct": -6.98
        },
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        }
      ]
    },
    "mandate_breaches": [],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Seed capital for Singapore family office entity",
          "amount": 5000000,
          "currency": "USD",
          "due_from": "2027-01-01",
          "due_to": "2027-12-31",
          "certainty": "Likely"
        }
      ],
      "total_planned_needs": 5000000.0,
      "liquid_assets_available": 2400000.0,
      "shortfall": 2600000.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": null,
    "relevant_rm_notes": [
      {
        "date": "2026-04-15",
        "note": "Client subscribed the shipping and energy FCN. His view is that charter rates stay elevated while the Strait situation is unresolved. Noted that his operating business benefits from the same conditions. He said the point of the Asia portfolio was to be uncorrelated with the Gulf business. It currently is not."
      },
      {
        "date": "2026-08-12",
        "note": "Client is planning a Singapore family office entity for 2027, around USD 5m of seed capital. He asked for a view on what happens to his portfolio if the Strait reopens and normalises. We have not modelled this."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 5,000,000 in known upcoming cash needs but only 2,400,000 in liquid/cash holdings — a gap of 2,600,000.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      }
    ],
    "recommended_lead_option": "Fund upcoming known cash needs"
  },
  "CL-0020": {
    "client_id": "CL-0020",
    "client_name": "Grace Adeyemi-Lim",
    "risk_profile": "Growth",
    "portfolio_ids": [
      "PF-0024"
    ],
    "situation_summary": "Grace Adeyemi-Lim (Growth risk profile, AUM ~19,059,758 USD). Across 1 portfolio(s), average value change is 5.51% over the snapshot period.",
    "value_trends": [
      {
        "portfolio_name": "Advisory Growth Portfolio",
        "base_currency": "USD",
        "snapshot_series": [
          {
            "date": "2025-12-31",
            "value": 18063650.39
          },
          {
            "date": "2026-02-27",
            "value": 18525474.05
          },
          {
            "date": "2026-03-31",
            "value": 18154462.73
          },
          {
            "date": "2026-06-30",
            "value": 18761818.22
          },
          {
            "date": "2026-08-26",
            "value": 19059758.28
          }
        ],
        "first_date": "2025-12-31",
        "last_date": "2026-08-26",
        "first_value": 18063650.39,
        "last_value": 19059758.28,
        "change_pct": 5.51,
        "path_shape": "volatile / reversed direction",
        "max_drawdown_pct_from_peak": -2.0
      }
    ],
    "unrealised_pnl": {
      "total_unrealised_pnl_base": 2847404.8,
      "total_market_value_base": 19059758.28,
      "worst_positions": [
        {
          "instrument_name": "Global Investment Grade Corporate Bond Fund",
          "unrealised_pnl_base": -49200.0,
          "unrealised_pnl_pct": -4.04
        },
        {
          "instrument_name": "USD Call Deposit",
          "unrealised_pnl_base": 0.0,
          "unrealised_pnl_pct": 0.0
        },
        {
          "instrument_name": "Short Duration USD Bond Fund",
          "unrealised_pnl_base": 21000.0,
          "unrealised_pnl_pct": 1.4
        }
      ]
    },
    "mandate_breaches": [
      {
        "type": "concentration",
        "instrument_name": "Global Healthcare Equity Fund",
        "actual_pct": 17.43,
        "max_single_position_pct": 15.0,
        "description": "Global Healthcare Equity Fund is 17.4% of the portfolio, above the mandate's single-position limit of 15.0%."
      }
    ],
    "credit_facility_status": null,
    "cash_flow_gap": {
      "planned_needs": [
        {
          "description": "Hong Kong property purchase",
          "amount": 3600000,
          "currency": "USD",
          "due_from": "2027-04-01",
          "due_to": "2027-12-31",
          "certainty": "Likely"
        },
        {
          "description": "Healthcare foundation seed funding",
          "amount": 2500000,
          "currency": "USD",
          "due_from": "2028-01-01",
          "due_to": "2028-12-31",
          "certainty": "Aspirational"
        }
      ],
      "total_planned_needs": 6100000.0,
      "liquid_assets_available": 850000.0,
      "shortfall": 5250000.0,
      "has_shortfall": "True"
    },
    "risk_profile_check": {
      "risk_tolerance_score": "7",
      "actual_equity_pct": 75.08,
      "expected_equity_pct_approx": "56",
      "direction": "higher",
      "description": "Portfolio equity weight (75.1%) is notably higher than what the client's stated risk tolerance score of 7/10 would suggest."
    },
    "relevant_rm_notes": [
      {
        "date": "2026-02-27",
        "note": "Clinics group is expanding into Malaysia. Client wants portfolio growth but is aware her wealth and her largest holdings are in the same sector. Hong Kong property purchase planned for 2027, around USD 3.6m. Foundation ambitions for 2028 are aspirational at this stage."
      }
    ],
    "note_flags_for_manual_review": [],
    "options": [
      {
        "title": "Rebalance to correct mandate breach",
        "rationale": "Portfolio is currently outside its agreed mandate: Global Healthcare Equity Fund is 17.4% of the portfolio, above the mandate's single-position limit of 15.0%.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify smallest set of trades needed to bring allocation back within mandate bands."
          },
          {
            "owner": "IC/Risk",
            "due_date": "TBD",
            "description": "Log breach for formal review; confirm if a temporary tolerance is acceptable."
          }
        ],
        "urgency_rank": 1,
        "recommended_lead_option": true
      },
      {
        "title": "Fund upcoming known cash needs",
        "rationale": "Client has 6,100,000 in known upcoming cash needs but only 850,000 in liquid/cash holdings — a gap of 5,250,000.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Identify lowest-impact holdings to raise the needed cash ahead of the due date."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Confirm the due date and certainty of each planned need with the client directly."
          }
        ],
        "urgency_rank": 2,
        "recommended_lead_option": false
      },
      {
        "title": "Review risk alignment with client",
        "rationale": "Portfolio equity weight (75.1%) is notably higher than what the client's stated risk tolerance score of 7/10 would suggest.",
        "actions": [
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Discuss with client whether current risk positioning still matches their comfort level and goals."
          },
          {
            "owner": "RM",
            "due_date": "TBD",
            "description": "Document outcome of the conversation in RM notes for future reference."
          }
        ],
        "urgency_rank": 3,
        "recommended_lead_option": false
      }
    ],
    "recommended_lead_option": "Rebalance to correct mandate breach"
  }
};
